class Todo < ApplicationRecord
  enum :status, { pending: 0, in_progress: 1, completed: 2 }, validate: true

  validates :title, presence: true
  validate :duedate_in_future, if: -> { duedate && duedate_changed? }

  scope :where_title_contains, ->(value) { where("unaccent(title) ILIKE unaccent(?)", "%#{value}%") }
  scope :where_description_contains, ->(value) { where("unaccent(description) ILIKE unaccent(?)", "%#{value}%") }

  paginates_per 5

  private

  def duedate_in_future
    return if duedate > Time.zone.now

    errors.add(:duedate, "must be in the future")
  end
end
